import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials) {
        const { userId, password } = credentials;
        try {
          // const resLogin = await fetch(
          //   `${process.env.NEXT_PUBLIC_HOST}/auth/login/`,
          //   {
          //     headers: {
          //       "Content-Type": "application/json;charset=utf-8",
          //     },
          //     method: "POST",
          //     body: JSON.stringify({
          //       userId,
          //       password,
          //     }),
          //   }
          // );
          // let data = await resLogin.json();
          // if (resLogin.status == 200) {
          //   return data;
          // } else {
          //   throw new Error(data.detail);
          // }
          let data = {
            refresh:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcwNDk3Mzk4NywiaWF0IjoxNzAzNzY0Mzg3LCJqdGkiOiIwNmMxZDNhYjcyZmY0MzY5OGNhMTIxYWEwMzNmMTY3NCIsInVzZXJJZCI6OH0.FPABeMB-2d3oVzbj7KXLu5K6JA2XqqtfxZyEg1yAEnA",
            access:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAzNzkzMTg3LCJpYXQiOjE3MDM3NjQzODcsImp0aSI6ImRkZTFlZmNmYzg2OTQzODJhOTNhNzI1YjA2MjFkNDM0IiwidXNlcklkIjo4fQ.HUA4N2hpDjVQcZcqSZinWvD-jvInrak1S5Urgea6m7M",
            currentUser: {
              id: 8,
              last_login: "2023-12-28T17:53:07.450961+06:00",
              is_superuser: false,
              first_name: "",
              last_name: "",
              email: "computer.it2@waltonbd.com",
              is_staff: false,
              is_active: true,
              date_joined: "2023-11-18T16:34:32.906837+06:00",
              userId: "44556",
              full_name: "Abu Sadat",
              designation: "First Sr. Asst. Director",
              mobile: "01686694425",
              is_management: false,
              esignature: "/media/signatures/44556_signature.png",
              legal_entity: null,
              operating_unit: null,
            },
          };
          return data;
        } catch (error) {
          if (error.cause.code == "ECONNREFUSED") {
            throw new Error("Server Error");
          }
          throw new Error(error);
        }
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
  session: {
    strategy: "jwt",
    maxAge: 1 * 5 * 60 * 60,
    // updateAge: 1 * 0.5 * 60 * 60,
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
};
