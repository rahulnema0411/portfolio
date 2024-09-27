"use client";

import paycrunch from "../../../public/products/paycrunch.png";
import hitwicket from "../../../public/products/hitwicket.png";
import octropoker from "../../../public/products/octropoker.png";
import cudddle from "../../../public/products/cudddle.png";
import ProductCard from "./productCard";

export default function ProductsSection() {
  return (
    <div className="flex flex-col px-8 py-24 sm:items-center space-y-16 bg-gradient-to-b from-white to-materialblue">
      <p className="sm:w-1/2 text-5xl sm:text-6xl font-calistoga text-black sm:text-center sm:mx-auto">
        Products I have helped build so far
      </p>
      <div className="flex flex-col md:flex-row md:space-x-6 md: w-full md:overflow-x-auto">
        <ProductCard
          imageData={paycrunch}
          title="PayCrunch: a upi based creditline for gen-z."
          websiteLink="https://www.paycrunch.in/"
          appstoreLink="https://apps.apple.com/in/app/paycrunch/id1630908229"
          playstoreLink="https://play.google.com/store/apps/details?id=in.paycrunch.paycrunch&pcampaignid=web_share"
        />
        <ProductCard
          imageData={hitwicket}
          title="Hitwicket Cricket Game 2024"
          websiteLink="https://hitwicket.com/"
          appstoreLink="https://apps.apple.com/in/app/hitwicket-cricket-game-2024/id1498437026"
          playstoreLink="https://play.google.com/store/apps/details?id=cricketgames.hitwicket.strategy&pcampaignid=web_share"
        />
        <ProductCard
          imageData={octropoker}
          title="Octro Poker Texas Holdem Game"
          websiteLink="https://www.octropoker.com/"
          appstoreLink="https://apps.apple.com/in/app/octro-poker-real-money-game/id6443772042"
          playstoreLink="https://play.google.com/store/apps/details?id=com.octro.pokerlive&pcampaignid=web_share"
        />
        <ProductCard
          imageData={cudddle}
          title="Cudddle: A new age dating app"
          websiteLink="https://cudddle.club/"
          appstoreLink="https://testflight.apple.com/join/w9SeWdry"
          playstoreLink="https://play.google.com/store/apps/details?id=com.fc201studios.cudddles"
        />
      </div>
    </div>
  );
}
