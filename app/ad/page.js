"use client"
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Script from "next/script";
export default function AdPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const finalUrl = searchParams.get("url");
  const [timeLeft, setTimeLeft] = useState(5); // 5 seconds

  useEffect(() => {
    if (timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer); // cleanup on unmount
  }, [timeLeft]);
  useEffect(() => {
    // Show ad for 5 seconds, then redirect
    const timer = setTimeout(() => {
      window.location.href = finalUrl;
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, [finalUrl]);

  return (
    <>
      <Script
        id="monetag-ad-script"
        src="https://fpyf8.com/88/tag.min.js"
        strategy="afterInteractive"
        async
        data-zone="149911"
        data-cfasync="false"
      />
      <div className="flex items-center justify-center h-screen bg-black text-white">
        <h1 className="text-xl">Redirecting in {timeLeft}.Please wait</h1>
      </div>
    </>
  );
}
