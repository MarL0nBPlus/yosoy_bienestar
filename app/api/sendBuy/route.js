import { NextResponse } from "next/server";

const safeString = (value) =>
    typeof value === "string" && value.trim().length > 0
        ? value.trim()
        : null;

export async function POST(request) {
    try {
        const body = await request.json();
        const { productId, payload } = body;

        if (!productId) {
            return NextResponse.json(
                { error: "productId faltante" },
                { status: 400 }
            );
        }

        if (!payload || typeof payload !== "object") {
            return NextResponse.json(
                { error: "payload inválido o faltante" },
                { status: 400 }
            );
        }

        console.log("productId recibido:", productId);
        console.log("payload recibido:", payload);

        // const externalPayload = {
        //     Name: payload.name,
        //     LastName: payload.apellido,
        //     PhoneNumber: payload.phone,
        //     Email: payload.email,
        //     Code_Promo: "",

        //     address: {
        //         Name: `${payload.name} ${payload.apellido}`,
        //         Email: payload.email,
        //         Company: "YSB",
        //         PhoneNumber: payload.phone,
        //         Country: "México",
        //         Street: payload.calle,
        //         NoExt: "",
        //         NoInt: "",
        //         PostalCode: payload.postal,
        //         Neighborhood: payload.colonia,
        //         City: payload.alcaldia,
        //         State: payload.alcaldia,
        //         Reference: ""
        //     }
        // };

        // const externalPayload = {
        //     Name: payload.name,
        //     LastName: payload.apellido,
        //     PhoneNumber: payload.phone,
        //     Email: payload.email,
        //     Code_Promo: "",
        //     address: {
        //         Name: `${payload.name} ${payload.apellido}`,
        //         Email: payload.email,
        //         Company: "YSB",
        //         PhoneNumber: payload.phone,
        //         Country: "México",
        //         Street: payload.calle,
        //         NoExt: "13",
        //         NoInt: "",
        //         PostalCode: payload.postal,
        //         Neighborhood: payload.colonia,
        //         City: payload.alcaldia,
        //         State: payload.alcaldia,
        //         Reference: "Edificio"
        //     }
        // };

        const externalPayload = {
            Name: safeString(payload.name),
            LastName: safeString(payload.apellido),
            PhoneNumber: safeString(payload.phone),
            Email: safeString(payload.email),
            Code_Promo: "",
            address: {
                Name: `${safeString(payload.name)} ${safeString(payload.apellido)}`,
                Email: safeString(payload.email),
                Company: "YSB",
                PhoneNumber: safeString(payload.phone),
                Country: "México",
                Street: safeString(payload.calle),
                NoExt: "13",
                NoInt: "",
                PostalCode: safeString(payload.postal),
                Neighborhood: safeString(payload.colonia),
                City: safeString(payload.alcaldia),
                State: safeString(payload.alcaldia),
                Reference: "Edificio",
            },
        };

        console.log("Payload enviado a API externa:", externalPayload);

        if (!externalPayload.LastName || !externalPayload.PhoneNumber) {
            return NextResponse.json(
                {
                    error: "Datos obligatorios faltantes",
                    details: {
                        LastName: externalPayload.LastName,
                        PhoneNumber: externalPayload.PhoneNumber,
                    },
                },
                { status: 400 }
            );
        }

        const apiUrl = `https://recargasyventassims.yosoybienestar.com/YSBTest/api/payment/buy/${productId}/card`;

        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(externalPayload),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("Error API externa:", errorText);

            return NextResponse.json(
                {
                    error: "Error en API externa de pagos",
                    details: errorText,
                    status: response.status,
                },
                { status: response.status }
            );
        }


        const data = await response.json();
        return NextResponse.json({
            paymentUrl: data.redirect,
            reference: data.reference,
            code: data.code,
            message: data.message,
        });

    } catch (error) {
        console.error("Error en sendBuy:", error);
        return NextResponse.json(
            { error: "Error interno al procesar el pago" },
            { status: 500 }
        );
    }
}
