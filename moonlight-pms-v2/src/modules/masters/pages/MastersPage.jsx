import PageHeader from "@/shared/components/common/PageHeader";

import MasterCard from "../components/MasterCard";

import { masterModules } from "../constants/masterModules";

const MastersPage = () => {

    return (

        <>

            <PageHeader

                title="Masters"

                subtitle="Configure hotel master data."

            />

            <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 xl:grid-cols-4">

                {

                    masterModules.map(module => (

                        <MasterCard

                            key={module.path}

                            {...module}

                        />

                    ))

                }

            </div>

        </>

    );

};

export default MastersPage;