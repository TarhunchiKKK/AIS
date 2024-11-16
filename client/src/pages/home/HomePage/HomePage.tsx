import { paragraphs } from "./constants";
import { ContentWrapper } from "@/shared/ui";

export function HomePage() {
    return (
        <>
            <ContentWrapper>
                {paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-sm md:text-lg indent-8 md:indent-12 text-justify mb-1 last:mb-0">
                        {paragraph}
                    </p>
                ))}
            </ContentWrapper>
        </>
    );
}
