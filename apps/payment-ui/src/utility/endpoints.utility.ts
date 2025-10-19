export const buildTransactionRequestEndpoint = (paymentId: string, payWithPoints: boolean = false): string => {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

    if (backendUrl == null) {
        throw new Error('Missing NEXT_PUBLIC_BACKEND_URL');
    }

    return `${backendUrl}/payment-transaction?paymentId=${paymentId}&payWithPoints=${payWithPoints.toString()}`;
};

// 临时测试：用于二维码生成的函数，使用 ngrok 公网地址
export const buildQRCodeTransactionRequestEndpoint = (paymentId: string, payWithPoints: boolean = false): string => {
    // 硬编码 ngrok 地址用于二维码生成
    const ngrokUrl = 'https://laminous-phototactically-jannette.ngrok-free.dev';
    
    return `${ngrokUrl}/payment-transaction?paymentId=${paymentId}&payWithPoints=${payWithPoints.toString()}`;
};
