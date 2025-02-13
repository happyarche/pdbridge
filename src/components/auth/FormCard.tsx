import Link from "next/link";

type Props = {
    title: string;
    children: React.ReactNode;

}

export function FormCard({ title, children }: Props) {
    return (
        <div style={{ maxWidth: '90%', width: '550px' }}>
            <div className="bg-white rounded-lg shadow-md p-10 mx-auto">
            <p className="text-2xl font-normal mt-2 mb-9">{title}</p>
            {children}
            </div>
            <div className="text-left mt-4">
            <Link href="/" className="text-gray-700 hover:text-black">
                <span className="text-4xl">&larr;</span>
            </Link>
            </div>
        </div>
    );
};




