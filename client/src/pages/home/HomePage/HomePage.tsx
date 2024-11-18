import { cards, paragraphs } from "./constants";
import { ContentWrapper } from "@/shared/ui";
import { renderCard } from "./ui";

export function HomePage() {
    return (
        <>
            <div className="mt-8 md:mt-14 mb-10 md:mb-14 lg:mb-20">
                <ContentWrapper>
                    <h1 className="text-[20px] sm:text-[36px] lg:text-[48px] xl:text-[54px] leading-[28px] sm:leading-[48px] lg:leading-[60px] xl:leading-[70px] font-normal">
                        Автоматизированная система учета и контроля исполнения локальных нормативных актов
                    </h1>
                </ContentWrapper>
            </div>

            <div className="mb-8 md:mb-20">
                {paragraphs.map((paragraph, index) => (
                    <div key={index} className="mb-4 sm:mb-6 lg:mb-8 last:mb-0">
                        <h3 className="font-bold text-[16px] sm:text-[24px] lg:text-[32px] mb-2">{paragraph.title}</h3>

                        <p className="text-[12px] sm:text-[16px] lg:text-[20px] text-justify">{paragraph.content}</p>
                    </div>
                ))}
            </div>

            <div className="mb-4">
                <h3 className="font-bold text-[20px] sm:text-[28px] mb-4 sm:mb-8">Возможности системы</h3>

                <div className="flex flex-col md:flex-row justify-between items-center flex-wrap xl:flex-nowrap gap-6">
                    {cards.map((card) => renderCard(card.title, card.image, card.content))}
                </div>
            </div>
        </>
    );
}
