import { sideBarItems } from "@/app/configs/constants";
import useRouteChange from "@/shared/hooks/useRouteChange";
import { useClerk } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";

function DashboardItems({ bottomContent }: { bottomContent?: boolean }) {
  const { activeRoute, setActiveRoute } = useRouteChange();
  const { user, signOut } = useClerk();
  const pathname = usePathname();

  return (
    <>
      {!bottomContent ? (
        <>
          {sideBarItems.map((item: DashboardSideBarTypes, index: number) => (
            <Link
              href={item.url}
              key={index}
              className="p-2 py-5 flex items-center"
            >
              <span
                className={`text-3xl mr-2 ${
                  item.url === activeRoute && "text-[#463bbd]"
                }`}
              >
                {item.icon}
              </span>
            </Link>
          ))}
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default DashboardItems;
