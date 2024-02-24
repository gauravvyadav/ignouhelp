import Link from "next/link"
import { cn } from "@/src/lib/utils"

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className="m-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className={cn("h-6 w-auto", className)}
        viewBox="0 0 2000 404"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="2000"
          height="404"
          data-background-color="#ffffff"
          transform="translate(-1.212 -.382)"
          viewBox="0 0 396 80"
        >
          <svg
            width="395.52"
            height="79.849"
            transform="translate(.24 .076)"
            viewBox="0 0 395.52 79.849"
          >
            <svg width="395.52" height="79.849" viewBox="0 0 395.52 79.849">
              <svg width="395.52" height="79.849" viewBox="0 0 395.52 79.849">
                <g>
                  <svg
                    width="395.52"
                    height="79.849"
                    viewBox="0 0 395.52 79.849"
                  >
                    <svg
                      width="395.52"
                      height="79.849"
                      viewBox="0 0 395.52 79.849"
                    >
                      <svg
                        width="395.52"
                        height="79.849"
                        data-palette-color="#000000"
                        viewBox="2.17 -38.38 251.52 50.78"
                      >
                        <path
                          d="M2.17-33.2q0-.32.2-.56.19-.25.51-.64.68-.78 1.59-1.65.9-.86 1.83-1.67.58-.46.88-.46.29 0 .9.46 1.98 1.71 3.37 3.32.32.37.53.62.2.26.2.58 0 .31-.2.56-.21.24-.55.66-.66.75-1.54 1.62-.88.87-1.81 1.65-.34.29-.54.38-.19.08-.36.08-.17 0-.36-.08-.18-.09-.57-.38-.98-.78-1.83-1.65-.86-.87-1.54-1.67l-.51-.62q-.2-.24-.2-.55zm8.84 9.49v22.42q0 .73-.3 1.01Q10.4 0 9.67 0H4.64Q3.91 0 3.6-.28q-.3-.28-.3-1.01v-22.42q0-.73.3-1.01.31-.28 1.04-.28h5.03q.73 0 1.04.28.3.28.3 1.01zm30.81 1.05v19.8q0 7.13-4.07 10.87-4.06 3.73-11.14 3.73-2.93 0-4.64-.42-1.71-.43-2.59-.82-.56-.27-.73-.56-.24-.39-.55-1.15-.3-.76-.57-1.66-.08-.34-.03-.51.1-.25.37-.52.44-.44 1.26-1.02.81-.59 1.25-.76.47-.17.86.05.63.34 1.82.77 1.18.43 3.33.43 3.42 0 5.57-1.76 2.14-1.76 2.14-5.42v-.88h-.09q-.54.68-1.4 1.39-.85.71-2.2 1.2-1.36.49-3.48.49-3.69 0-6.05-1.6-2.35-1.6-3.46-4.41-1.11-2.81-1.11-6.4 0-3.93 1.29-7.05 1.29-3.13 4.35-4.95 3.05-1.81 8.35-1.81 3.17 0 5.33.46t3.63 1.15q1.46.68 2.56 1.36zm-11.79 2.93q-2.84 0-4.32 1.91-1.49 1.9-1.49 5.91 0 6.27 5.17 6.27 2.03 0 3.1-.83 1.08-.83 1.61-2.1v-10.08q-.53-.39-1.51-.73-.98-.35-2.56-.35zm42.55 4.18v14.26q0 .73-.31 1.01-.3.28-1.03.28h-5.03q-.74 0-1.04-.28-.31-.28-.31-1.01v-12.99q0-2.66-1.12-3.88-1.12-1.22-3.05-1.22-1.93 0-2.97.83-1.04.83-1.6 2.09v15.17q0 .73-.3 1.01-.31.28-1.04.28h-5.03q-.73 0-1.04-.28-.3-.28-.3-1.01v-20.46q0-.59.24-.91.51-.68 1.24-1.39.72-.71 1.77-1.51.31-.25.61-.25.26 0 .61.25 1.02.8 1.75 1.54.74.73 1.3 1.51h.12q.41-.54 1.24-1.26.83-.72 2.34-1.28 1.5-.56 3.84-.56 2.3 0 4.37.93 2.08.93 3.41 3.12 1.33 2.2 1.33 6.01zM91.15.61q-6.15 0-9.74-3.27t-3.59-9.74q0-6.64 3.73-9.93 3.72-3.28 9.95-3.28 6 0 9.62 3.23 3.61 3.24 3.61 9.54 0 6.57-3.61 10.01Q97.5.61 91.15.61zm.25-5.91q2.68 0 4.05-1.67 1.37-1.67 1.37-5.73 0-3.85-1.38-5.43-1.38-1.57-4.09-1.57-2.61 0-4.11 1.69-1.51 1.7-1.51 5.51 0 3.98 1.43 5.59Q88.59-5.3 91.4-5.3zM118.69.61Q110 .61 110-9.91l-.02-12.4q0-.59.24-.91 1.02-1.34 3-2.9.34-.25.61-.25.32 0 .61.25 1.05.8 1.77 1.51t1.24 1.39q.24.32.24.91v11.71q0 5.3 4.2 5.3 2.07 0 3.32-1.45 1.24-1.45 1.24-3.94v-11.62q0-.59.25-.91 1.02-1.34 3-2.9.34-.25.61-.25.32 0 .61.25 1.05.8 1.77 1.51t1.24 1.39q.24.32.24.91v21.19q0 .46-.32.79t-.8.33h-3.67q-.39 0-.69-.11-.31-.11-.57-.43l-1.52-1.95h-.17q-.39.56-1.21 1.29-.82.74-2.37 1.27-1.55.54-4.16.54zm43.58-17.07v15.17q0 .73-.31 1.01t-1.04.28h-5.03q-.73 0-1.03-.28-.31-.28-.31-1.01v-33.04q0-.58.24-.9 1.03-1.34 3.01-2.9.34-.25.61-.25.32 0 .61.25 1.05.8 1.77 1.51t1.23 1.39q.25.32.25.9v11.84h.09q.54-.7 1.39-1.42.86-.72 2.29-1.21 1.43-.49 3.65-.49 2.24 0 4.32.93 2.07.93 3.39 3.12 1.32 2.2 1.32 6.01v14.26q0 .73-.3 1.01-.31.28-1.04.28h-5.03q-.73 0-1.04-.28-.3-.28-.3-1.01v-12.92q0-2.71-1.13-3.94-1.12-1.23-3.05-1.23-1.9 0-2.95.83-1.05.83-1.61 2.09zM197.57.61q-4.13 0-7.18-1.33t-4.74-4.14q-1.68-2.81-1.68-7.25 0-6.66 3.41-10.08 3.42-3.42 9.09-3.42 3.68 0 6.23 1.32 2.56 1.32 3.89 3.64 1.33 2.32 1.33 5.29 0 2.91-1.49 4.06-1.49 1.14-4.35 1.14h-10.47q.19 2.52 1.84 3.84Q195.1-5 197.93-5q2.25 0 3.6-.68 1.36-.67 1.89-1.06.47-.34 1.05-.32.47 0 1.34.19.86.18 1.72.67.61.32.61.88 0 .32-.13.9-.07.34-.24.99-.17.65-.44 1.21-.15.27-.46.51-.49.34-1.58.9-1.08.57-2.96.99-1.88.43-4.76.43zm-6.01-15.77h7.96q1.24 0 1.24-1.15 0-1.73-1.08-2.92-1.09-1.18-3.26-1.18-2.37 0-3.48 1.51-1.11 1.52-1.38 3.74zm30.03 13.33L216.48.51q-.51.22-.73.22-.22 0-.46-.17-.56-.39-1.28-1.91-.72-1.53-.72-4.7v-28.28q0-.58.24-.9 1.03-1.34 3-2.9.34-.25.61-.25.32 0 .61.25 1.05.8 1.77 1.51t1.24 1.39q.24.32.24.9v26.79q0 1.61.27 2.74.27 1.14.63 1.82.42.81-.31 1.15zm21.65-23.78q3.56 0 5.87 1.6t3.44 4.39q1.14 2.8 1.14 6.41 0 3.91-1.33 7.03-1.33 3.13-3.92 4.96T242.02.61q-1.98 0-3.26-.45-1.28-.45-2.05-1.08-.77-.62-1.21-1.13h-.1v10.4q0 .59-.24.9-1.03 1.35-3 2.91-.35.24-.62.24-.29 0-.61-.24-1.05-.81-1.77-1.52-.72-.7-1.23-1.39-.24-.31-.24-.9v-30.1q0-.59.24-.91.51-.68 1.23-1.39.72-.71 1.77-1.51.32-.25.66-.25.32 0 .66.25 1.03.8 1.76 1.54.73.73 1.29 1.51h.13q.41-.51 1.27-1.24.85-.74 2.43-1.3 1.57-.56 4.11-.56zm-3 19.99q2.63 0 4.09-1.84 1.45-1.84 1.45-5.33 0-6.59-5.42-6.59-2.3 0-3.4.94-1.09.94-1.56 1.98v5.3q0 2.37 1.22 3.96 1.22 1.58 3.62 1.58z"
                          className="wordmark-text-0"
                          data-fill-palette-color="primary"
                          opacity="1"
                        ></path>
                      </svg>
                    </svg>
                  </svg>
                </g>
              </svg>
            </svg>
          </svg>
        </svg>
      </svg>
    </Link>
  )
}
