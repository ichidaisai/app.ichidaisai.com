import { getStoreData } from "@/libs/dummyData";
import StoreListPage from "@/components/StoreListPage";
export default function Page() {
  const stores: Store[] = getStoreData();
  return (
    <StoreListPage
      heading="出店一覧"
      headingEnglish="List of Stalls"
      stores={stores}
    />
  );
}
