
export default function Notes() {
    // TODO: this will take a list of user notes
    // they will be rendered in the return (map for li) ** DONT FORGET KEY**

    return (
        <div>
            <ul role="list" className="divide-y divide-gray-100">
            <li className="flex justify-between gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4">
                {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" /> */}
                <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">PHARMACY NAME</p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">PHARMACY ADDRESS</p>
                </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">USER'S NOTE</p>
                {/* <p className="mt-1 text-xs leading-5 text-gray-500">Last updated <time datetime="2023-01-23T13:23Z">TIME</time></p> */}
                </div>
            </li>
            </ul>

        </div>
    )
}