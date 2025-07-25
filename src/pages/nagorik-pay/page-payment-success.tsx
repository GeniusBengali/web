import Lottie from "react-lottie-player"
import success from "../../assets/animations/success.json"

const PagePaymentSuccess = () => {
  return (
    <div className="relative grid min-h-screen grid-cols-[1fr_2.5rem_auto_2.5rem_1fr] grid-rows-[1fr_1px_auto_1px_1fr]  bg-gray-950 [--pattern-fg:var(--color-white)]/10">
      <div className="col-start-3 row-start-3 flex max-w-lg flex-col p-2 bg-white/10">
        <div className="rounded-xl p-10 text-sm/7 bg-gray-950 text-gray-300">
          <div className="flex gap-2">
            <img src="https://nthlryuqjkkqesxdlzva.supabase.co/storage/v1/object/public/app/assets/playpal_trophy_32x32.png" className="size-6" alt="Playpal" />
            <h1 className="font-serif text-md leading-6">Payment Success</h1>
          </div>
          <Lottie
              loop={false}
              animationData={success}
              play
              style={{ width: 150, height: 150, margin: "0 auto" }}
            />
          <div className="space-y-6 flex">
            <p>Thank you. You can now close this window.</p>
          </div>
        </div>
      </div>
      <div className="relative -right-px col-start-2 row-span-full row-start-1 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
      <div className="relative -left-px col-start-4 row-span-full row-start-1 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
      <div className="relative -bottom-px col-span-full col-start-1 row-start-2 h-px bg-(--pattern-fg)"></div>
      <div className="relative -top-px col-span-full col-start-1 row-start-4 h-px bg-(--pattern-fg)"></div>
    </div>
  )
}

export default PagePaymentSuccess