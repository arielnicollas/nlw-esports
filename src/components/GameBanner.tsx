interface GameBannerProps{
    bannerUrl: String;
    title: String;
    adsCount: number;
}


export function GameBanner() {
    return (
        <a href="" className="relative rounded-lg overflow-hidden" >
            <img src="/game-1.png" alt="" />
            <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0'>
                <strong className="font-bold text-white block">League of Legends</strong>
                <span className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
            </div>
        </a>
    )
}