import Header from "@/components/Header";
import Profile from "@/components/profile/Profile";

export default function Home() {
  return (
    <main>
      <div>
        <Header />
        <div className="flex pt-20  justify-center">
          <Profile />
        </div>
      </div>
    </main>
  );
}
