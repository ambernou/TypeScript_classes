interface Point {
    x: number
    y: number
}

abstract class MyGraphicsPrimitive2D {
    protected a: Point
    protected b: Point

    constructor (a: Point, b: Point) {
        this.a = a
        this.b = b
    }

    displace(deltaX: number, deltaY: number): Point[] {
        this.a.x += deltaX
        this.a.y += deltaY
        this.b.x += deltaX
        this.b.y += deltaY
        return [{x: this.a.x, y: this.a.y}, {x: this.b.x, y: this.b.y}]
    }
}

abstract class MyAreaPrimitive2D extends MyGraphicsPrimitive2D {

    get area(): number {
        let l: number = this.b.x - this.a.x
        let h: number = this.b.y - this.a.y
        return l * h
    }
}

class MyCircle extends MyAreaPrimitive2D {
    protected circleX: number = (this.b.x - this.a.x) / 2
    protected circleY: number = (this.b.y - this.a.y) / 2
    protected r: number

    get circlePoint(): number[] {
        if (this.circleX <= this.circleY) {
            this.r = this.circleX / 2
        } else {
            this.r = this.circleY / 2
        }

        return [this.circleX, this.circleY, this.r]
    }
}

class MyRectangle extends MyAreaPrimitive2D {
    protected l: number = this.b.x - this.a.x
    protected h: number = this.b.y - this.a.y

    get lengthAndHigh(): number[] {
        return [this.l, this.h]
    }
}
