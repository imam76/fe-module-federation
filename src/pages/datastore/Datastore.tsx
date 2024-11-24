import MenuGrid from "@components/ui/MenuGrid";
import { Container } from "@mantine/core";
import { Building2, ClipboardList, Package } from "lucide-react";
import { useTranslation } from "react-i18next";

const Datastore = () => {
  const { t, i18n } = useTranslation();

  const MENU_ITEMS = [
    {
      title: 'Daftar Akun',
      description: 'Mengelola daftar akun dan kategori keuangan',
      icon: ClipboardList,
      color: '#ff7761',
    },
    {
      title: 'Data Produk',
      description: 'Manajemen data produk dan inventaris',
      icon: Package,
      color: '#e34935',
    },
    {
      title: 'Data Gudang',
      description: 'Pengelolaan lokasi dan stok gudang',
      icon: Building2,
      color: '#a67c52',
    },
    {
      title: 'Data Produk',
      description: 'Manajemen data produk dan inventaris',
      icon: Package,
      color: '#e34935',
    },
  ];

  const onTranslateButtonClick = async (): Promise<void> => {
    if (i18n.resolvedLanguage === "en") {
      await i18n.changeLanguage("es");
    } else {
      await i18n.changeLanguage("en");
    }
  };

  return (
    <>
      <p className="text-red-800 text-6xl">{t("home.greeting")}</p>
      <button type="submit" onClick={onTranslateButtonClick}>
        translate
      </button>
      <Container size={"xl"}>
        <MenuGrid items={MENU_ITEMS} />
      </Container>
    </>
  );
};

export default Datastore;