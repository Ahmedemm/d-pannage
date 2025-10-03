import { redirect } from "next/navigation";

type Props = { params: { slug: string } };

export default function LegacyCityPage({ params }: Props) {
  // Redirige vers la route canonique /depannage/:slug
  return redirect(`/depannage/${params.slug}`);
}
