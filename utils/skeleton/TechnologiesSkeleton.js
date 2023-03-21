import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
export default function TechnologiesSkeleton() {
    return (
        <div>
            <Skeleton height={50} width={50} circle={true} />
            <Skeleton width={100} />
        </div>
    )
}