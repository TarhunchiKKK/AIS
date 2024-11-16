export const renderCard = (title: string, image: string, content: string) => {
    return (
        <div key={title} className="rounded-md border-[1px] border-gray p-4 w-[440px]">
            <img src={image} className="w-full h-44" />

            <h4 className="font-bold text-base sm:text-lg text-center mt-6 mb-4">{title}</h4>

            <p className="text-center text-sm sm:text-base">{content}</p>
        </div>
    );
};
