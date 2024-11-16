import { cards, paragraphs } from "./constants";
import { ContentWrapper } from "@/shared/ui";
import { renderCard } from "./ui";

export function HomePage() {
    return (
        <>
            <div className="mb-4">
                <ContentWrapper>
                    {paragraphs.map((paragraph, index) => (
                        <div key={index} className="mb-4 last:mb-0">
                            <h3 className="font-bold text-lg mb-2">{paragraph.title}</h3>

                            <p className="text-sm md:text-base indent-8 md:indent-12 text-justify mb-1 last:mb-0">
                                {paragraph.content}
                            </p>
                        </div>
                    ))}
                </ContentWrapper>
            </div>

            <div className="mb-4">
                <ContentWrapper>
                    <h3 className="text-center font-bold text-lg sm:text-xl md:text-2xl mb-4">Возможности системы</h3>

                    <div className="flex flex-row justify-around items-center flex-wrap gap-6">
                        {cards.map((card) => renderCard(card.title, card.image, card.content))}
                    </div>
                </ContentWrapper>
            </div>
        </>
    );
}
