import { Link, useLocation, useParams } from "react-router-dom";

type BreadcrumbsProps = {
    accessCode?: string;
    tenantId?: string;
};

function formatSegment(segment: string): string {
    return segment
        .replace(/-/g, " ")
        .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function shouldIgnoreSegment(
    segment: string,
    ignoredSegments: Array<string | undefined>,
): boolean {
    const upperSegment = segment.toUpperCase();

    return (
        ignoredSegments.includes(segment) ||
        /^\d+$/.test(segment) ||
        upperSegment.startsWith("USR-") ||
        /^[A-Z0-9]{12}$/.test(upperSegment)
    );
}

export default function Breadcrumbs({
    accessCode,
    tenantId,
}: BreadcrumbsProps) {
    const location = useLocation();
    const { lang = "es" } = useParams();

    const segments = location.pathname
        .split("/")
        .filter(Boolean);

    const ignoredSegments: Array<string | undefined> = [
        "es",
        "en",
        "fr",
        accessCode,
        tenantId,
    ];

    const visibleSegments = segments.filter(
        (segment) => !shouldIgnoreSegment(segment, ignoredSegments),
    );

    const homePath = accessCode
        ? `/${lang}/${accessCode}/dashboard`
        : `/${lang}/dashboard`;

    return (
        <ol className="breadcrumb float-sm-end">
            <li className="breadcrumb-item">
                <Link to={homePath}>Dashboard</Link>
            </li>

            {visibleSegments.map((segment, index) => {
                const isLast = index === visibleSegments.length - 1;

                return (
                    <li
                        key={`${segment}-${index}`}
                        className={`breadcrumb-item ${
                            isLast ? "active" : ""
                        }`}
                        aria-current={isLast ? "page" : undefined}
                    >
                        {formatSegment(segment)}
                    </li>
                );
            })}
        </ol>
    );
}