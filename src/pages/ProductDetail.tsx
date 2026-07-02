import { Link, useParams } from 'react-router'
import { ArrowLeft, CalendarCheck, FlaskConical, Package, ShieldCheck } from 'lucide-react'

import { getProductDetailBySlug } from '@/data/productDetails'


export default function ProductDetail() {
  const { slug } = useParams()
  const product = slug ? getProductDetailBySlug(slug) : undefined

  if (!product) {
    return (
      <section className="min-h-screen bg-navy px-6 py-32 text-center text-white">
        <p className="label-style text-amber mb-4">PRODUCT NOT FOUND</p>
        <h1 className="font-display text-5xl mb-6">This product detail is not available.</h1>
        <Link to="/products" className="btn-primary">
          Back to Products
        </Link>
      </section>
    )
  }

  const facts = [
    { label: 'Chemical Name', value: product.chemicalName },
    { label: 'Formula', value: product.formula },
    { label: 'HSN Code', value: product.hsnCode },
    { label: 'CAS No', value: product.casNo },
    { label: 'Make', value: product.make },
    { label: 'Origin', value: product.origin },
    { label: 'Packing', value: product.standardPacking },
    ...(product.grade ? [{ label: 'Grade', value: product.grade }] : []),
  ]

  const handleViewSpecs = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    // Let React/route rendering settle, then scroll to the section reliably.
    requestAnimationFrame(() => {
      const el = document.getElementById('specifications')
      if (!el) return

      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  return (
    <div className="min-h-screen bg-navy text-cream">

      <section className="relative overflow-hidden px-6 pb-16 pt-28 md:px-12 lg:pt-32">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            background:
              'radial-gradient(circle at 20% 15%, rgba(212,165,116,0.28), transparent 32%), linear-gradient(135deg, #0A1628 0%, #132238 52%, #0A1628 100%)',
          }}
        />
        <div className="relative mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <Link
              to="/products"
              className="mb-8 inline-flex items-center gap-2 text-sm uppercase tracking-widest text-amber transition-opacity hover:opacity-80"
            >
              <ArrowLeft className="h-4 w-4" />
              Products
            </Link>
            <p className="label-style text-amber mb-4">AUTHORISED DISTRIBUTOR</p>
            <h1 className="font-display text-white" style={{ fontSize: 'max(38px, 7vw)', lineHeight: 0.95 }}>
              {product.name}
            </h1>
            <p className="mt-6 max-w-[760px] text-base leading-7 text-cream/85 md:text-lg">
              {product.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={(() => {
                  const productName = product.name
                  const whatsappText = encodeURIComponent(
                    `Hi Novella! I’d like to get more information about your product '${productName}'. Please share details.`
                  )
                  return `https://wa.me/919513131375?text=${whatsappText}`
                })()}
                target="_blank"
                rel="noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <CalendarCheck className="h-4 w-4" />
                Book Now
              </a>
              <a
                href="#specifications"
                onClick={handleViewSpecs}
                className="btn-secondary inline-flex items-center gap-2"
              >
                <ShieldCheck className="h-4 w-4" />
                View Specs
              </a>

            </div>
          </div>

          <div className="relative min-h-[300px] overflow-hidden rounded-lg border border-amber/25 bg-charcoal/70 p-5 shadow-2xl">
            <div className="absolute inset-x-0 top-0 h-1 bg-amber" />
            <div className="flex h-full min-h-[280px] flex-col items-center justify-center border border-dashed border-amber/35 bg-navy/60 text-center">
              {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-[280px] w-[380px] object-contain bg-transparent"
                    loading="eager"
                  />
              ) : (
                <>
                  <FlaskConical className="mb-5 h-14 w-14 text-amber" />
                  <p className="label-style text-amber">Product Photo Space</p>
                  <p className="mt-3 max-w-[280px] text-sm text-cream/65">
                    Reserved area for a product pack shot, drum, bag, tanker, or certificate image.
                  </p>
                </>
              )}
            </div>
          </div>

        </div>
      </section>

      <section className="px-6 py-12 md:px-12">
        <div className="mx-auto grid max-w-[1400px] gap-4 md:grid-cols-2 xl:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} className="rounded-lg border border-amber/15 bg-white/[0.04] p-5">
              <p className="label-style mb-3 text-amber">{fact.label}</p>
              <p className="text-sm leading-6 text-cream">{fact.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-12 md:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-6 flex items-center gap-3">
            <Package className="h-5 w-5 text-amber" />
            <h2 className="font-display text-3xl text-white md:text-4xl">Industry Uses</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {product.industryUses.map((use) => (
              <span key={use} className="rounded-full border border-amber/25 bg-amber/10 px-4 py-2 text-sm text-cream">
                {use}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="specifications" className="px-6 py-12 md:px-12">
        <div className="mx-auto max-w-[1400px]">
          <p className="label-style mb-4 text-amber">CERTIFICATE DATA</p>
          <h2 className="font-display mb-8 text-4xl text-white md:text-5xl">Specifications</h2>

          {product.tables.length === 0 ? (
            <div className="rounded-lg border border-amber/20 bg-white/[0.04] p-8">
              <p className="text-cream/80">
                This product appears in the brochure catalogue, but no detailed certificate table is included in the supplied PDF.
                Please book an inquiry for the latest datasheet.
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {product.tables.map((table) => (
                <div key={table.title} className="overflow-hidden rounded-lg border border-amber/20 bg-white/[0.04]">
                  <div className="border-b border-amber/15 bg-amber/10 px-5 py-4">
                    <h3 className="font-display text-2xl text-white">{table.title}</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                      <thead>
                        <tr className="bg-navy/80">
                          {table.columns.map((column) => (
                            <th key={column} className="border-b border-amber/15 px-5 py-4 font-medium uppercase tracking-wider text-amber">
                              {column}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {table.rows.map((row, rowIndex) => (
                          <tr key={`${table.title}-${rowIndex}`} className="transition-colors hover:bg-white/[0.03]">
                            {table.columns.map((column) => (
                              <td key={column} className="border-b border-white/10 px-5 py-4 align-top text-cream/85">
                                {row[column] || '-'}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="px-6 pb-20 pt-8 md:px-12">
        <div className="mx-auto flex max-w-[1000px] flex-col items-center rounded-lg border border-amber/20 bg-charcoal/60 p-8 text-center md:p-12">
          <p className="label-style mb-4 text-amber">READY TO SOURCE</p>
          <h2 className="font-display text-4xl text-white md:text-5xl">Book this product inquiry</h2>
          <p className="mt-4 max-w-[620px] text-cream/75">
            Share required quantity, packing preference and destination. Our team will help with availability, pricing and documentation.
          </p>
          <a
            href={(() => {
              const productName = product.name
              const whatsappText = encodeURIComponent(
                `Hi Novella! I’d like to get more information about your product '${productName}'. Please share details.`
              )
              return `https://wa.me/919513131375?text=${whatsappText}`
            })()}
            target="_blank"
            rel="noreferrer"
            className="btn-primary mt-8 inline-flex items-center gap-2"
          >
            <CalendarCheck className="h-4 w-4" />
            Book Now
          </a>
        </div>
      </section>
    </div>
  )
}
