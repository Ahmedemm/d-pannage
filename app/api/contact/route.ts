import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, phone, email, subject, message, consent } = data || {};

    if (!name || !phone || !email || !message || consent !== true) {
      return NextResponse.json(
        { ok: false, error: 'Champs requis manquants ou consentement non donné.' },
        { status: 400 }
      );
    }

    // TODO: brancher un envoi d'email (e.g., via un service externe) si souhaité
    // Ici, on mock la réussite
    console.log('New contact message:', { name, phone, email, subject, message });

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
