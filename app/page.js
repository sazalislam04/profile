import { Inter } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";
import bg from "../public/bg.png";
import user from "../public/user.png";
import styles from "../styles/Styles.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <section>
        <div className="container">
          <div className={styles.loginContainer}>
            <div className={styles.leftWrapper}>
              <div className={styles.leftimg}>
                <Image src={bg} alt="image" width={350} height={350} />
              </div>
            </div>

            <div className={styles.rightWrapper}>
              <div className="">
                <div className={styles.user}>
                  <Image src={user} alt="user" width={70} height={70} />
                </div>
                <form className={styles.inputFrom}>
                  {/* email input */}
                  <div>
                    <label className="" htmlFor="email">
                      Email
                    </label>
                    <input
                      className=""
                      type="email"
                      name="email"
                      placeholder="Your email"
                      required
                    />
                  </div>
                  {/* password input */}
                  <div className={styles.passwordInput}>
                    <label className="" htmlFor="password">
                      Password
                    </label>
                    <input
                      className=""
                      type="password"
                      name="password"
                      placeholder="Your password"
                      required
                    />
                  </div>
                  <div className="">
                    <button className={styles.btn}>Log In</button>
                  </div>
                </form>
                {/* create new account */}
                <div className={styles.account}>
                  <p className="">
                    Do not have an account?{" "}
                    <Link href="/register" className="">
                      Create new account
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
