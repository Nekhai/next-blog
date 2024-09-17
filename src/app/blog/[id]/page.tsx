export default function BlogDetailPage({ params}: { params: { id: string } }) {
    return <div>Blog {params.id}</div>
}