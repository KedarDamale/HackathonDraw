import useResponsive from "@/hooks/useResponsive"
import DrawingEditor from "../drawing/DrawingEditor"

function WorkSpace() {
    const { viewHeight } = useResponsive()

    return (
        <div
            className="absolute left-0 top-0 w-full max-w-full flex-grow overflow-x-hidden md:static"
            style={{ height: viewHeight }}
        >
          <DrawingEditor />
        </div>
    )
}

export default WorkSpace
