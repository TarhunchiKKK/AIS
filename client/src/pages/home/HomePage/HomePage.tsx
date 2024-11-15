import { Header } from "@/widgets/other";
import { paragraphs } from "./constants";

export function HomePage() {
    return (
        <>
            <Header />

            <main className="mt-4 py-4 px-4 md:px-0">
                <div className="container mx-auto">
                    <div>
                        {paragraphs.map((paragraph, index) => (
                            <p key={index} className="text-lg indent-12 text-justify mb-2 last:mb-0">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
}
