import { Header } from "@/widgets/other";
import { paragraphs } from "./constants";

export function HomePage() {
    return (
        <>
            <Header />

            <main className="mt-2 md:mt-4 py-2 md:py-4 px-4 md:px-0">
                <div className="container mx-auto">
                    <div>
                        {paragraphs.map((paragraph, index) => (
                            <p
                                key={index}
                                className="text-sm md:text-lg indent-8 md:indent-12 text-justify mb-1 last:mb-0"
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
}
