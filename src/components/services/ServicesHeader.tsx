"use client"

import { Button } from "@/components/ui/button";
import { sendWhatsappMessage } from "@/lib/sendWhatsappMessage";
import { SERVICE_BROCHURE_URL } from "@/static/Brochure";
import { CONTACT_MESSAGE, CONTACT_NUMBER } from "@/static/Contact";
import { usePathname, useRouter } from "next/navigation";

export default function ServicesHeader() {
    const router = useRouter()
    const pathname = usePathname()
    return (
        <div className="text-center md:text-start max-xl:space-y-8 xl:flex items-end">
            <div className="space-y-2 xl:space-y-4 w-full">
                <h1 className="text-[28px] md:text-[32px] xl:text-[40px] leading-9">Layanan Kami</h1>
                <p className="text-gray-700 leading-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className={`flex gap-4 max-md:justify-center`}>
                <Button onClick={() => window.open(SERVICE_BROCHURE_URL, "_blank")} className={`max-xl:text-sm ${pathname == "/" && "max-md:rounded-full"}`}>
                    {pathname == "/" ? "Unduh brosur layanan" : "Unduh brosur"}
                </Button>
                {
                    pathname == "/" ? (
                        <Button onClick={() => router.push("/services")} variant="secondary" className="max-md:hidden max-xl:text-sm">Lihat semua layanan</Button>
                    ) : (
                        <Button onClick={() => sendWhatsappMessage(CONTACT_NUMBER, CONTACT_MESSAGE)} variant="secondary" className="max-xl:text-sm">Konsultasi</Button>
                    )
                }
            </div>
        </div>
    );
}
