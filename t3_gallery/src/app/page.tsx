import Link from "next/link";

const mockUrls = [
  "https://uedjzs9bqh.ufs.sh/f/KIywpoRDj8Mra4ZC3RQNsozCiwaTXSPBqUEmx9Leb8MA26gY",
  "https://uedjzs9bqh.ufs.sh/f/KIywpoRDj8Mr0ssHXazLaEjdMKoZvm38DpY5NyiCkrxsX1tO",
  "https://uedjzs9bqh.ufs.sh/f/KIywpoRDj8Mrk93UM8HWEi8Gul6zSxCXtHyN4mvQTBPnfMwe",
  "https://uedjzs9bqh.ufs.sh/f/KIywpoRDj8Mrb2iMtwgONCRI8Y4EZnvMxWQu5F2HKUycmPhV",
  "https://uedjzs9bqh.ufs.sh/f/KIywpoRDj8MrMmwri2puy82WSB0JtOEned6aroLNq5hT3Y7m",
  "https://uedjzs9bqh.ufs.sh/f/KIywpoRDj8MrX2pJ3vQMeuBJiSVtCwP1K5FnvOsNWl76ATy9"
]

const mockImages = mockUrls.map((url,index)=>({
  id: index + 1,
  url,
}))

export default function HomePage() {
  return (
    <div className="">
      <div className="flex flex-wrap gap-4">
        {
          [...mockImages,...mockImages,...mockImages].map((image) => (
            <div key={image.id} className="w-48">
              <img src={image.url} alt="image" />
            </div>
          ))

        }
      </div>
    </div>
  );
}
