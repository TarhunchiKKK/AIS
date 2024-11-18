export const renderCard = (title: string, image: string, content: string) => {
    return (
        <div
            key={title}
            className="rounded-md bg-white border-gray px-4 md:px-9 py-8 md:py-12 w-auto max-w-[400px] md:w-[360px] lg:w-[440px] h-[380px] sm:h-[420px] md:h-[470px]"
        >
            <div className="mb-8">
                <img src={image} className="w-44 h-44" />
            </div>

            <h4 className="font-bold text-base sm:text-lg lg:text-2xl mb-4">{title}</h4>

            <p className="text-sm sm:text-base text-[#7D7987]">{content}</p>
        </div>
    );
};
