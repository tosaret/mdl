import Head from "next/head";

import CheckoutForm from "../components/checkout/CheckoutForm";
import CheckoutGallery from "../components/checkout/CheckoutGallery";
import CheckoutHeader from "../components/checkout/CheckoutHeader";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Checkout - MDL</title>
      </Head>

      <CheckoutHeader />
      <CheckoutForm />
      <CheckoutGallery />
    </div>
  );
};

export default Home;
