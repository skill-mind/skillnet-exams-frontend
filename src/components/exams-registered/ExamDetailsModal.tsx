'use client'
import { useState } from "react";
import { Checkbox } from "@headlessui/react";
import { CustomModal } from "../dashboard/exam/components/ui/custom-modal";
import { Button } from "../ui/Button";
import { Check } from "lucide-react";

interface Prop {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const ExamDetailsModal = ({ open, setOpen }: Prop) => {
    const [checked, setChecked] = useState(false);

    return (
        <CustomModal className="bg-black h-screen w-screen" open={open} onClose={() => setOpen(false)}>
            <div className="w-full mx-auto py-10 md:w-[500px]" >
                <div className="w-full flex flex-col items-center justify-center " >
                    <p className=" text-[#FCFCFC] text-[24px] font-ubuntu lg:text-[24px] font-semibold">Exams</p>
                    <p className="text-[14px] font-ubuntu font-normal text-[#ABABAB] lg:text-[14px] mt-[16px]">Enter exams details</p>
                </div>

                <div className="w-full px-6">
                    <div className="w-full flex flex-col my-[24px]">
                        <label className=" font-ubuntu font-normal text-[14px] text-[#9596A0] " htmlFor="email">Email</label>
                        <input placeholder="Enter email" className="py-[8px] px-[12px] font-ubuntu text-[14px] mt-[2px] bg-black outline-none rounded-[8px] border border-[#252625]  placeholder:text-[#696969]" />
                    </div>
                    <div className="w-full flex flex-col my-[24px]">
                        <label className=" font-ubuntu font-normal text-[14px] text-[#9596A0] " htmlFor="exam-code">Exam code</label>
                        <input placeholder="Enter exam code" className="py-[8px] px-[12px] font-ubuntu text-[14px] mt-[2px] bg-black outline-none rounded-[8px] border border-[#252625]  placeholder:text-[#696969]" />
                    </div>

                    <div className="w-full flex items-center justify-start gap-2">
                        <Checkbox
                            checked={checked}
                            onChange={setChecked}
                            className={`w-8 h-6 border-[1.5px] lg:w-[19px] lg:h-[19px] flex items-center justify-center border-[#2F302F] rounded-md border-dashed transition-all ${checked ? "bg-[#D0EFB1]" : "bg-transparent"
                                }`}
                        >
                            {checked && <Check className="w-4 h-4 text-black" />}
                        </Checkbox>
                        <p className="text-[#9596A0] font-ubuntu font-normal text-[10px]">
                            By clicking on this, you agree to the <span className="text-[#D0EFB1] font-ubuntu">Terms & Conditions</span> and <span className="text-[#D0EFB1] font-ubuntu">Privacy Policy</span> governing SkillNet.
                        </p>
                    </div>

                    <div className="w-full mt-[24px]">
                        <Button className="bg-[#D0EFB1] w-full text-black" disabled={!checked}>
                            Continue
                        </Button>
                    </div>
                </div>
            </div>
        </CustomModal>
    );
}

export default ExamDetailsModal;
