const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

type CaptchaType = "v2" | "v3";

export const subscribeNewsletter = async ({
  email,
  token,
  captchaType = "v3",
}: {
  email: string;
  token: string;
  captchaType?: CaptchaType;
}) => {
  try {
    const res = await fetch(`${BASE_URL}/newsletter-subscriptions/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
      body: JSON.stringify({
        email,
        captcha_token: token,
        captcha_type: captchaType,
      }),
    });
    const data = await res.json().catch(() => null);
    if (!res.ok) {
      const err = new Error(`HTTP ${res.status}`) as Error & {
        response?: { data?: unknown };
      };
      err.response = { data };
      throw err;
    }
    return data;
  } catch (error) {
    const err = error as { response?: { data?: unknown }; message?: string };
    console.error(
      "Error subscribing to newsletter:",
      err.response?.data || err.message
    );
    throw error;
  }
};
