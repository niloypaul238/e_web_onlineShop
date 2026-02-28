"use client"
import Link from "next/link";
import { useContext, useState } from "react";
import { CreatCont } from "../../Context";

export default function PaymentForm() {
    const [method, setMethod] = useState("card");
    let [amout, setAmout] = useState(0)
    const [discount, SetDiscount] = useState(0)
    const [form, setForm] = useState({
        name: "",
        card: "",
        expiry: "",
        cvv: "",
        amount:"",
        save: false,
    });

    const { cart, setCart } = useContext(CreatCont)
    cart?.map(item => {
        const total = item.price * item.qt

        return (
            amout += total
        )
    })

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name || !form.card || !form.expiry || !form.amount || !form.cvv) {
            alert("Please fill all fields");
            return;
        }

        alert("Payment Data Submitted ✔\n" + JSON.stringify(form, null, 2));
    };

    return (
        <div className="sm:grid flex flex-col-reverse  w-10/12 gap-4 mx-auto grid-cols-12">
            <div className="bg-white col-span-8 p-6 rounded shadow">
                <h2 className="text-lg font-semibold mb-1">Payment Details</h2>
                <p className="text-sm text-gray-500 mb-4">Add new Payment Details</p>

                {/* Tabs */}
                <div className="flex gap-2 mb-4">
                    <button
                        onClick={() => setMethod("card")}
                        className={`w-full py-2 rounded text-sm font-medium ${method === "card"
                            ? "bg-indigo-400 text-white"
                            : "border text-gray-600"
                            }`}
                    >
                        Pay with Credit Card
                    </button>
                    {/* <button
                        onClick={() => setMethod("bank")}
                        className={`w-1/2 py-2 rounded text-sm font-medium ${method === "bank"
                            ? "bg-indigo-400 text-white"
                            : "border text-gray-600"
                            }`}
                    >
                        Pay with Bank Debit
                    </button> */}
                </div>

                {/* Logos */}
                <div className="flex gap-2 mb-4">
                    <img src="https://img.icons8.com/color/48/visa.png" />
                    <img src="https://img.icons8.com/color/48/mastercard.png" />
                    <img src="https://img.icons8.com/color/48/amex.png" />
                    <img src="https://img.icons8.com/color/48/discover.png" />
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="text-sm">Name on the card <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Mr John Snow"
                            className="w-full border p-2 rounded"
                        />
                        <p></p>
                    </div>

                    <div>
                        <label className="text-sm">Card Number</label>
                        <input
                            type="text"
                            name="card"
                            value={form.card}
                            onChange={handleChange}
                            placeholder="4444 4444 4444 4444"
                            className="w-full border p-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="text-sm">Amount</label>
                        <input
                            type="number"
                            name="amount"
                            value={form.amount}
                            onChange={handleChange}
                            placeholder="enter amount"
                            className="w-full border p-2 rounded"
                        />
                    </div>

                    <div className="flex gap-3">
                        <div className="w-1/2">
                            <label className="text-sm">Expiry Date</label>
                            <input
                                type="text"
                                name="expiry"
                                value={form.expiry}
                                onChange={handleChange}
                                placeholder="12/28"
                                className="w-full border p-2 rounded"
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="text-sm">CVV</label>
                            <input
                                type="password"
                                name="cvv"
                                value={form.cvv}
                                onChange={handleChange}
                                placeholder="485"
                                className="w-full border p-2 rounded"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="save"
                            checked={form.save}
                            onChange={handleChange}
                        />
                        <span className="text-sm text-gray-600">
                            Store credit card for future payments
                        </span>
                    </div>

                    <button className="w-full bg-indigo-400 text-white py-2 rounded hover:bg-blue-700 transition">
                        Submited
                    </button>
                </form>
            </div>
            <div className="col-span-4 mt-4 md:mt-0">
                <div className=''>
                    <div>
                        <div className=''>
                            <p>Total Amout : {amout} BDT</p>
                            <p className='border-b border-dotted'>Discout : <span>{discount}</span> </p>
                        </div>
                        <div className='flex flex-col gap-3  justify-between'>
                            <p >Amount : {amout - discount} BDT</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}