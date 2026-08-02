import Grid from "@mui/material/Grid";

import PageHeader from "@/shared/components/common/PageHeader";

import CrudPageLayout from "@/shared/components/crud/CrudPageLayout";

import MasterCard from "../components/MasterCard";

import { masterItems } from "../constants/masterItems";

const MastersPage = () => {

    return (

        <CrudPageLayout

            header={

                <PageHeader
                    title="Masters"
                    subtitle="Configure hotel master data."
                />

            }

        >

            <Grid
                container
                spacing={3}
            >

                {masterItems.map((item) => (

                    <Grid
                        key={item.title}
                        size={{
                            xs:12,
                            sm:6,
                            md:4,
                            lg:3
                        }}
                    >

                        <MasterCard item={item}/>

                    </Grid>

                ))}

            </Grid>

        </CrudPageLayout>

    );

};

export default MastersPage;