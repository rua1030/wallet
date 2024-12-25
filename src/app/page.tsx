import Login from "@/components/login"

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
    style={{
      backgroundImage: `url('https://cdn.pixabay.com/photo/2014/04/08/19/38/sky-319546_1280.png')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      display: "flex",
      flexDirection: "column",
    }}>
     <Login/>
    </div>
  );
}
