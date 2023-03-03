import { XMarkIcon } from '@heroicons/react/20/solid'

export default function SaleBanner() {
  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-900 py-2.5 px-6 sm:px-3.5 sm:before:flex-1">
      <div className="flex flex-wrap items-center gap-y-2 gap-x-4">
        <p className="text-sm leading-6 text-gray-50">
          <strong className="font-semibold">GeneriCon 2023</strong>
          <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
            <circle cx={1} cy={1} r={1} />
          </svg>
          Join us in Denver from June 7 – 9 to see what’s coming next.
        </p>
        <a
          href="#"
          className="flex-none rounded-full bg-gray-50 py-1 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-50"
        >
          Register now <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
      <div className="flex flex-1 justify-end">
        <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
          <span className="sr-only">Dismiss</span>
          <XMarkIcon className="h-5 w-5 text-gray-50" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
