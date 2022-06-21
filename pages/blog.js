export default function Home() {
    return (
        <div className="container mx-auto px-8 md:px-16 lg:px-32 py-4 md:py-8">
            <h1 className="text-center text-6xl font-bold">Blog</h1>

            <p className="text-center text-xl text-gray-700 mt-4">
                Sharing about what i've learned in my short lifespan.
                Hope that some of the random tibits would be helpful to you.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                <div>
                    <img className="rounded-lg" src="https://www.cortes.us/wp-content/uploads/2022/03/surface-tYOjcQ9NzHY-unsplash-1-1.jpg"/>
                    <h3 className="text-2xl font-bold">Starting with a personal health goes a long way</h3>
                    <p className="text-sm text-gray-500">After learning about meditation, i found out that i am less agitated when talking to people and appeared more calm</p>
                </div>

                <div>
                    <img className="rounded-lg" src="https://www.cortes.us/wp-content/uploads/2022/03/surface-tYOjcQ9NzHY-unsplash-1-1.jpg"/>
                    <h3 className="text-2xl font-bold">Starting with a personal health goes a long way</h3>
                    <p className="text-sm text-gray-500">After learning about meditation, i found out that i am less agitated when talking to people and appeared more calm</p>
                </div>

                <div>
                    <img className="rounded-lg" src="https://www.cortes.us/wp-content/uploads/2022/03/surface-tYOjcQ9NzHY-unsplash-1-1.jpg"/>
                    <h3 className="text-2xl font-bold">Starting with a personal health goes a long way</h3>
                    <p className="text-sm text-gray-500">After learning about meditation, i found out that i am less agitated when talking to people and appeared more calm</p>
                </div>

                <div>
                    <img className="rounded-lg" src="https://www.cortes.us/wp-content/uploads/2022/03/surface-tYOjcQ9NzHY-unsplash-1-1.jpg"/>
                    <h3 className="text-2xl font-bold">Starting with a personal health goes a long way</h3>
                    <p className="text-sm text-gray-500">After learning about meditation, i found out that i am less agitated when talking to people and appeared more calm</p>
                </div>
            </div>
        </div>
    );
}