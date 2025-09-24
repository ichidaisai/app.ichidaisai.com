import { getStoreData } from "@/libs/dummyData";
import StoreListPage from "@/components/StoreListPage";
import { notFound } from "next/navigation";

const categoryMap = {
  food: "飲食",
  shop: "物販・展示",
} as const;

type Props = {
  params: { category: string };
};

export default function Page({ params }: Props) {
  const { category } = params;
  const categoryName = categoryMap[category as keyof typeof categoryMap];
  if (!categoryName) notFound();

  const stores = getStoreData().filter((s) => s.category === categoryName);
  return (
    <StoreListPage
      heading={`${categoryName}の出店一覧`}
      headingEnglish="List of Stalls"
      stores={stores}
    />
  );
}
