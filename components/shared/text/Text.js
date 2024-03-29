export default function Text({title,position}) {
    return (
        <>
            <main className={`${position} justify-center items-center flex-wrap gap-2`}>
                {
                    title?.map(title=><h1 key={title.text} className={`text-${title?.color?`[#${title?.color}]`:''} text-4xl font-bold`}>{title.text}</h1>)
                }
            </main>

        </>
    )
}
