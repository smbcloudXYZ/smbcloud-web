import axios from "../../../lib/axios";
import SharedHead from "../../shared/head";
import sharedStyles from "@/styles/Shared.module.css";
import SharedTopBar from "@/pages/shared/topbar";
import { Inter } from "next/font/google";
import SharedFooter from "@/pages/shared/footer";
import { BsMailbox2 } from "react-icons/bs";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const getServerSideProps = async ({ query }) => {
  const confirmationToken = query.confirmation_token;
  try {
    const res = await axios.get(
      `users/confirmation?confirmation_token=${confirmationToken}`
    );
    console.log(res);
    const user = res.data;
    return {
      props: {
        user,
      },
    };
  } catch (error) {
    console.log("Error confirmation", error.response.data);
    return {
      redirect: {
        destination: `/login?error=${JSON.stringify(error.response.data)}`,
        permanent: false,
      },
    };
  }
};

export default function Confirmation({ user }) {
  return (
    <>
      <SharedHead
        title="Your email has been verified."
        description="Your email has been verified. Now you can login with your GitHub account."
      />
      <main className={sharedStyles.main}>
        <SharedTopBar />
        <h1 className={inter.className}>Confirmation</h1>
        <div className={inter.className}>
          <div className={sharedStyles.center}>
            <BsMailbox2 size="5em" />
          </div>
          <div className={sharedStyles.center}>
            <p className={inter.className}>
              Your email has been verified. Now you can login with your GitHub
              account. You will be redirect to the login page. Or click the link
              on the top left corner.
            </p>
          </div>
        </div>
        <SharedFooter />
      </main>
    </>
  );
}
