import { Color } from './color.enum'
import { Material } from './material.enum'

function Text({ children }: { children: React.ReactNode }) {
    return <div className="text-xl text font-waffleSoft text-yellow-900">{children}</div>
}

function Searcher({ value }: { value: string }) {
    return (
        <div>
            <Text>{value}</Text>
            <input className="rounded-lg outline-0 p-2 py-1 px-2 w-full" />
        </div>
    )
}

function FilterSearcher({ value, children }: { value: string; children: React.ReactNode }) {
    return (
        <div>
            <Text>{value}</Text>
            <select className="rounded-lg outline-0 py-1 px-2">{children}</select>
        </div>
    )
}

function RangeSearcher({ value }: { value: string }) {
    return (
        <div>
            <Text>{value}</Text>
            <div className="grid grid-cols-2 gap-2">
                <input
                    className="rounded-lg outline-0 py-1 px-2"
                    type="number"
                    min="0"
                    step="1"
                    placeholder="от"
                />
                <input
                    className="rounded-lg outline-0 py-1 px-2"
                    type="number"
                    min="0"
                    step="1"
                    placeholder="от"
                />
            </div>
        </div>
    )
}

function Button() {
    return <button className="rounded-lg text-white bg-yellow-600 p-2">Показать</button>
}

function LeftContainer() {
    return (
        <div className="bg-yellow-400 rounded-lg col-span-1 shadow-lg h-min">
            <div className="p-6 grid grid-cols-1 w-full gap-4">
                <Searcher value="Поиск" />

                <FilterSearcher value="Цвет">
                    {Object.entries(Color).map(([colorKey, colorValue]) => (
                        <option value={colorKey}>{colorValue}</option>
                    ))}
                </FilterSearcher>

                <FilterSearcher value="Материал">
                    {Object.entries(Material).map(([materialKey, materialValue]) => (
                        <option value={materialKey}>{materialValue}</option>
                    ))}
                </FilterSearcher>

                <FilterSearcher value="В наличии">
                    {Object.entries({ yes: 'Да', not: 'Нет', yesAll: 'Все' }).map(
                        ([inStockKey, inStockValue]) => (
                            <option value={inStockKey}>{inStockValue}</option>
                        )
                    )}
                </FilterSearcher>

                <RangeSearcher value="Цена" />
                <Button />
            </div>
        </div>
    )
}

export default LeftContainer
