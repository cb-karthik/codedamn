import FormProfile from "./profile/FormProfile";
import FormSocials from "./socials/FormSocials";

import FormResume from "./resume/FormResume";
import FormPortfolio from "./portfolio/FormPortfolio";

type Props = {
  activeTab: number;
};

function FormContainer({ activeTab }: Props) {
  switch (activeTab) {
    case 1:
      return <FormProfile />;
    case 2:
      return <FormSocials />;
    case 3:
      return <FormPortfolio />;
    case 4:
      return <FormResume />;
    default:
      return <FormProfile />;
  }
}

export default FormContainer;
