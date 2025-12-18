export async function createPaymentSession({ productId, payload }) {
    const response = await fetch("/api/sendBuy", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            productId,
            payload,
        }),
    });

    if (!response.ok) {
        throw new Error("Error al generar la sesión de pago");
    }

    return response.json();
}
