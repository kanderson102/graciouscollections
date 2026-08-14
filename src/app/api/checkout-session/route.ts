import { NextResponse } from "next/server";
import Stripe from "stripe";

// Initialize Stripe (checking key presence first to avoid startup crashes)
const stripeKey = process.env.STRIPE_SECRET_KEY;
const stripe = stripeKey ? new Stripe(stripeKey) : null;

export async function POST(req: Request) {
  try {
    const { items } = await req.json();

    if (!items || items.length === 0) {
      return NextResponse.json({ message: "Cart is empty" }, { status: 400 });
    }

    const origin = req.headers.get("origin") || "http://localhost:3000";

    // DEVELOPER CONVENIENCE / TEST MODE:
    // If the Stripe Secret Key is missing, simulate a successful checkout for demo purposes
    if (!stripe) {
      console.warn("STRIPE_SECRET_KEY is missing. Simulating checkout redirect.");
      
      // We will redirect to a simulated success page
      const simulatedUrl = `${origin}/success?simulated=true`;
      return NextResponse.json({ url: simulatedUrl });
    }

    // Map cart items to Stripe checkout line items format
    const line_items = items.map((item: any) => {
      // Build absolute image URL for Stripe display
      // Stripe requires absolute URLs for product images
      let imageUrl = item.image;
      if (imageUrl && !imageUrl.startsWith("http")) {
        // Fallback to absolute URL using the origin of the request
        imageUrl = `${origin}${imageUrl}`;
      }

      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: `${item.name} (${item.size})`,
            images: imageUrl ? [imageUrl] : [],
          },
          unit_amount: Math.round(item.price * 100), // stripe expects pence
        },
        quantity: item.quantity,
      };
    });

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}?canceled=true`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { message: error.message || "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
