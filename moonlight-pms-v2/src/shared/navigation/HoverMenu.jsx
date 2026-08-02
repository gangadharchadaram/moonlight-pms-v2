import {
    FloatingPortal,
    FloatingFocusManager,
    useFloating,
    offset,
    flip,
    shift,
    autoUpdate,
} from "@floating-ui/react";

export default function HoverMenu({
    open,
    anchorRef,
    children,
}) {

    const {
        refs,
        floatingStyles,
        context
    } = useFloating({

        open,

        placement: "right-start",

        whileElementsMounted: autoUpdate,

        middleware: [

            offset(8),

            flip(),

            shift(),

        ],

    });

    return (
        <FloatingPortal>

            {open && (

                <FloatingFocusManager
                    context={context}
                    modal={false}
                >

                    <div
                        ref={refs.setFloating}
                        style={floatingStyles}
                        className="
                            z-50
                            min-w-56
                            rounded-xl
                            border
                            bg-white
                            shadow-xl
                            p-2
                        "
                    >
                        {children}
                    </div>

                </FloatingFocusManager>

            )}

        </FloatingPortal>
    );
}