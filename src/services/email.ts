import axios from "axios";

export const sendEmail = async (
  name: string,
  email: string,
  phone: string,
  profession: string,
  comments: string,
  privacyConsent: boolean
) => {
  try {
    await axios.get(
      "https://hook.us2.make.com/7lgq9xfuyfwyaepoqcq2rs3qzrigasok",
      {
        params: {
          name,
          email,
          phone,
          profession,
          comments,
          privacyConsent,
        },
      }
    );
  } catch (error) {
    console.error(error);
  }
};
