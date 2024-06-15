import Layout from "../pagelayout"
import { Header } from "../ui/header"
import PharmaciesList from "../ui/pharmaciesList"
import Notes from "../ui/notes"

export default function Page() {
    return (
    <Layout>
        <Header />
        <p>---------</p>
        <p>MY PHARMACIES</p>
        <PharmaciesList />
        <p>MY NOTES</p>
        <Notes />
    </Layout>
    )
}