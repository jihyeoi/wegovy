import Layout from "../pagelayout"

export default function Page() {
    return (
        <Layout>
            <h1 className="text-center mb-12">
                <div className="text-6xl font-bold text-black">FAQs</div>
            </h1>
            <div className="bg-white/80 p-8 rounded-lg shadow-lg w-full max-w-4xl">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-black">What is Wegovy?</h2>
                    <p className="text-lg text-black">It is a medication approved by the FDA for chronic weight management in adults with obesity or overweight with at least one weight-related condition, such as hypertension, type 2 diabetes, or high cholesterol. </p>
                </div>
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-black">What is the difference between Wegovy and Ozempic? </h2>
                    <p className="text-lg text-black">Wegovy and Ozempic are both medications that contain semaglutide, but they are approved for different uses. Ozempic is approved for the treatment for type 2 diabetes. </p>
                </div>
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-black">How does it work? </h2>
                    <p className="text-lg text-black">Its active ingredient is semaglutide, which is a GLP-1 receptor agonist. Semaglutide mimics the effects of the GLP-1 hormone, which helps regulate appetite and food intake by increasing feelings of fullness and reducing hunger</p>
                </div>
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-black">How do I use it? </h2>
                    <p className="text-lg text-black">Wegovy is administered as a subcutaneously injection once a week</p>
                </div>
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-black">What dosing should I be on? </h2>
                    <p className="text-lg text-black">The lowest dosage of Wegovy starts at 0.25 mg. You start at this dose once a week, and gradually increase your dose every 4 weeks, until you hit a maintenance dose of either 1.7 mg or 2.4 mg.</p>
                </div>
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-black">How do I store it? </h2>
                    <p className="text-lg text-black">Wegovy should be stored in the refrigerator, but can be kept at room temperature for up to 28 days once in use.</p>
                </div>
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-black">What are some side effects? </h2>
                    <p className="text-lg text-black">The most common side effects of Wegovy are nausea, diarrhea, vomiting, constipation, stomach pain, headache, fatigue, and feeling bloated. It can also cause low blood sugar and heartburn. If you have severe pain in your stomach area that does not go away, please contact your doctor right away. </p>
                </div>
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-black">Who should not take Wegovy? </h2>
                    <p className="text-lg text-black">If you or your family have ever had a type of thyroid cancer (MTC) or if you have an endocrine system condition (MEN 2)</p>
                </div>
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-black">Why did you make this site? </h2>
                    <p className="text-lg text-black">Wegovy has been on backorder in my area for over a year, and I speak to many people who are looking for pharmacies that have Wegovy in stock. I thought it might be helpful for patients who are looking for it! </p>
                </div>
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-black">For any other Wegovy-specific questions and concerns, </h2>
                    <p className="text-lg text-black">please contact your doctor or your local pharmacist for a consultation. All of this information can also be found at the <a href="https://www.wegovy.com/">Wegovy</a> official site </p>
                </div>
            </div>
        </Layout>
    )
}

